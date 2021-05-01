import sys
from PyQt5.QtWidgets import *
from PyQt5.QtGui import *
from PyQt5.QtCore import QDate
from PyQt5 import uic
from openpyxl import Workbook, load_workbook
from functools import partial

from datetime import datetime
from Utile import *

Write_UI = resource_path('UI/Write_UI.ui')

class Write(QDialog):
    def __init__(self):
        QDialog.__init__(self,None)
        uic.loadUi(Write_UI,self)

        load_wb, load_ws = load_Update()

        self.Date.setPlainText(datetime.today().strftime("%D"))
        self.SaveButton.clicked.connect(self.pushSave)
        self.CancelButton.clicked.connect(self.pushCancel)

    def pushSave(self):
        Title = self.Title.toPlainText()
        Descrip = self.Descrip.toPlainText()
        now = self.Date.toPlainText()
        review_stack = 1

        load_wb, load_ws = load_Update()

        self.Line_number = get_line_Line_number(load_ws) # 엑셀이 유효한 값의 마지막을 반환

        add_list = [Title, Descrip, now,review_stack]
        if (check_duplicates(Title, load_ws, self.Line_number)) == True :
            self.mes = QMessageBox()
            Reply = self.mes.information(self, '제목 중복', \
                '이미 같은 제목이 있습니다.')
            return 0
        Write_excel(add_list, load_ws, self.Line_number)

        load_wb.save(resource_path("./excel/test_open.xlsx"))
        self.close()

    def pushCancel(self):
       self.close()
