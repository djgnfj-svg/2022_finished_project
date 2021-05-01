from datetime import *
from Main import *
from Utile import *

def Date_to_int(load_ws, line_num):
    today = datetime.today().strftime("%D")
    today = today.split('/')

    Write_date = str(load_ws.cell(line_num,3).value).split('/')
    Write_date = date(int(Write_date[2])+2000,int(Write_date[0]),int(Write_date[1]))
    today = date(int(today[2])+2000,int(today[0]), int(today[1]))

    date_gap = str((today - Write_date).days).split(',')[0]
    str_dat = " days"
    for x in range(len(str_dat)):
        date_gap = date_gap.replace(str_dat[x],"")
    return abs(int(date_gap))


def get_date_gap(date_gap, review_stack, load_ws, i, pages):
    result = 0
    if  0 < date_gap and review_stack < 2 :
        pages.append(i)
        result = 1
    elif (1 < date_gap) and review_stack < 3 :
        pages.append(i)
        result = 1
    elif (3 < date_gap)  and review_stack < 4 :
        pages.append(i)
        result = 1
    elif (7 < date_gap) and review_stack < 5 :
        pages.append(i)
        result = 1
    elif (14 < date_gap) and review_stack < 6 :
        pages.append(i)
        result = 1
    elif (31 < date_gap) and review_stack < 7 :
        pages.append(i)
        result = 1
    elif (93 < date_gap) and review_stack < 8 :
        pages.append(i)
        result = 1
    return result

def get_page_max(load_ws):
    page_max = 0
    pages = []
    rows = get_line_Line_number(load_ws)
    for i in range(1, rows):
        date_gap = Date_to_int(load_ws, i)
        page_max += get_date_gap(date_gap, load_ws.cell(i,4).value, load_ws, i, pages) 
    return page_max, pages
