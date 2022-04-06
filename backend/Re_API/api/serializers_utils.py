

from ..models import ER_Trolls_Models


def check_troller(nickname):
	return (ER_Trolls_Models.objects.filter(nickname=nickname).first().trolls_ven)