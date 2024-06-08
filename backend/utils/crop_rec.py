import pandas as pd
import numpy as np

def get_crops(key):
    df2=pd.read_csv("backend/data/rel_crops.csv")

    l=list(np.array(df2[df2['Crop']==key]))
    
    return(l[0])