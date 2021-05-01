import sys
from PyQt5.QtWidgets import *
from PyQt5.QtGui import *
from PyQt5.QtCore import QDate
from PyQt5 import uic
from openpyxl import Workbook, load_workbook
from functools import partial

from Review import *
from Write import *
from Modify import *
from Utile import *

Main_UI = resource_path('UI/Main_UI.ui')

class MyWindow(QWidget):
    def __init__(self):
        super().__init__()
        uic.loadUi(Main_UI, self)
        self.setupUI()

    def setupUI(self):
        self.WriteButton.clicked.connect(self.pushWriteBtnClicked)
        self.ReviewButton.clicked.connect(self.pushReviewbtnClicked)
        self.ModifyButton.clicked.connect(self.pushModifybtnClicked)

    def pushWriteBtnClicked(self):
        dlg = Write()
        dlg.exec_()

    def pushReviewbtnClicked(self):
        dlg = Review()
        dlg.exec_()

    def pushModifybtnClicked(self):
        dlg = Modify()
        dlg.exec_()