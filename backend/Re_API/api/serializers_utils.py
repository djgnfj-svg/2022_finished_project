

from ..models import ER_Trolls_Models


def check_troller(nickname):
	check_user = ER_Trolls_Models.objects.filter(nickname=nickname).first()
	if not check_user:
		return False
	return (check_user.trolls_ven)