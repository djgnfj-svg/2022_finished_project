
from character import ER_char_name


def get_Tier(rank_point):
	Tier = "iron"
	if rank_point < 1:
		pass
	elif rank_point == 1:
		Tier = "Bronze"
	elif rank_point == 2:
		Tier = "Silver"
	elif rank_point == 3:
		Tier = "Gold"
	elif rank_point == 4:
		Tier = "Platinum"
	elif rank_point == 5:
		Tier = "Diamond"
	elif rank_point == 6:
		Tier = "Demigod"
	elif rank_point == 7:
		Tier = "Eternity"
	return Tier

def get_Tier_Num(rank_point):
	tier_num = rank_point // 100
	if tier_num == 0:
		return 4
	elif tier_num == 1:
		return 3
	elif tier_num == 2:
		return 2
	else:
		return 1

def get_ER_Tier(mmr:int):
	#if 예외사항
	# todo 승격전일떄는? 0포인트일 때는?
	rank = mmr // 400

	Tier = get_Tier(rank)
	Tier_num = get_Tier_Num(mmr % 400)
	league_point = (rank % 100) + 1

	Tier_LP = str(Tier) + " " + str(Tier_num) + " " + str(league_point)
	return Tier_LP

def get_ER_char_name(charcode:int):
	return (ER_char_name[charcode])