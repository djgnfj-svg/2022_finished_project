

from ..models import ER_Base_Model


def check_troller(nickname):
	return (ER_Base_Model.objects.filter(nickname=nickname).first().trolls_ven)