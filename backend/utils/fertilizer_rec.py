import pandas as pd

def get_var(crop, state, district):
    df = pd.read_excel('backend\data\stcr_reg_var.xlsx')

    df['combined'] = df['crop'] + '_' + df['state'] + '_' + df['district']

    row = df[df['combined'] == f'{crop}_{state}_{district}']

    values = {
        'a1': row['a1'].values[0],
        'a2': row['a2'].values[0],
        'a3': row['a3'].values[0],
        'b1': row['b1'].values[0],
        'b2': row['b2'].values[0],
        'b3': row['b3'].values[0]
    }

    return values