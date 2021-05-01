import sys
from PyQt5.QtWidgets import *
from PyQt5.QtGui import *
from PyQt5.QtCore import QDate
from PyQt5 import uic
from openpyxl import Workbook, load_workbook
from functools import partial
from datetime import datetime
from Utile import *

from Mainwindow import *
from Review import *
from Write import *
from Modify import *
from Utile import *
from Time_Utiles import *

import re
import io



# coding=<utf-8>
if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = MyWindow()
    window.show()
    sys.exit(app.exec_())