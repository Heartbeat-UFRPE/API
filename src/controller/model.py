#!/usr/bin/env python
# coding: utf-8

# In[1]:

import sys
import plotly.express as px
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

import statsmodels.api as sm
import statsmodels.formula.api as smf
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import roc_auc_score, roc_curve, classification_report,accuracy_score, confusion_matrix, auc


argumentos = sys.argv
del argumentos[0]

dados = argumentos[0].replace('"','').split("|")


age          = dados[0]
anemia       = dados[1]
diabetes     = dados[2]
highPressure = dados[3]
smoking      = dados[4]
sex          = dados[5]

import pathlib

df = pd.read_csv(str(pathlib.Path().absolute())+"\src\controller\\"+"heart_failure_clinical_records_dataset.csv")


modelo = smf.glm(formula='DEATH_EVENT ~ age + anaemia + diabetes + high_blood_pressure + smoking + sex', data=df,
                family = sm.families.Binomial()).fit()


model = LogisticRegression(penalty='none', solver='newton-cg')
baseline_df = df[['DEATH_EVENT', 'age', 'anaemia', 'diabetes', 'high_blood_pressure', 'smoking', 'sex']].dropna()
y = baseline_df.DEATH_EVENT
X = pd.get_dummies(baseline_df[['age','anaemia', 'diabetes', 'high_blood_pressure','smoking', 'sex']], drop_first=True)


# In[5]:


model.fit(X, y)


# In[6]:


LogisticRegression(C=1.0, class_weight=None, dual=False, fit_intercept=True,
                   intercept_scaling=1, l1_ratio=None, max_iter=100,
                   multi_class='warn', n_jobs=None, penalty='none',
                   random_state=None, solver='newton-cg', tol=0.0001, verbose=0,
                   warm_start=False)


# In[7]:


yhat = model.predict_proba(X)


# In[8]:


yhat = yhat[:, 1]


# In[9]:


confusion_matrix(y, model.predict(X))


# In[10]:


pd.crosstab(y, model.predict(X))


# In[11]:


acuracia = accuracy_score(y, model.predict(X))
#print('O modelo obteve %0.4f de acurácia.' % acuracia)


# In[12]:


#print(classification_report(y, model.predict(X)))


# In[ ]:





# In[14]:


def prev_death_event(age, anaemia, diabetes, high_blood_pressure, smoking, sex):
    eu = pd.DataFrame({ 'age': age, 'anaemia': anaemia, 'diabetes': diabetes, 'high_blood_pressure':  high_blood_pressure, 'smoking': smoking, 'sex': sex}, index=[0])
    minha_prob = model.predict_proba(eu)
    return str(minha_prob).strip("[]")


result = prev_death_event(age,anemia,diabetes,highPressure,smoking,sex)

print(result,flush=True)


