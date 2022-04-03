import requests

from time import sleep
from backend.settings import ER_API_KEY, ER_API_Season

from .utils import get_ER_Tier
from .models import ER_Base_Model

def get_ER_userNum(nickname):
	headers = {"accept": "applications/json", "x-api-key": ER_API_KEY}
	usernick_url = "https://open-api.bser.io/v1/user/nickname?query="+str(nickname)
	res = requests.get(usernick_url, headers=headers).json()

	userNum = res["user"]["userNum"]
	return userNum

def get_ER_userstatus(userNum):
	headers = {"accept": "applications/json", "x-api-key": ER_API_KEY}
	user_status = "https://open-api.bser.io/v1/user/stats/"+str(userNum)+'/'+str(ER_API_Season)
	res = requests.get(user_status, headers=headers).json()
	return res

def get_ER_api_data(instance:ER_Base_Model):
	ER_userStats_Solo = 0
	ER_userStats_Duo = 1
	ER_userStats_Squad = 2
	userNum = get_ER_userNum(instance.nickname)
	sleep(1)
	user_stats = get_ER_userstatus(userNum)
	instance.nickname = user_stats["userStats"][ER_userStats_Solo]["nickname"]
	
	#평균 K A H
	instance.averageKills = user_stats["userStats"][ER_userStats_Solo]["averageKills"]
	instance.averageAssistants = user_stats["userStats"][ER_userStats_Solo]["averageAssistants"]
	instance.averageHunts = user_stats["userStats"][ER_userStats_Solo]["averageHunts"]
	
	# # 티어는
	instance.soloTier = get_ER_Tier(int(user_stats["userStats"][ER_userStats_Solo]["mmr"]))
	instance.duoTier	= get_ER_Tier(int(user_stats["userStats"][ER_userStats_Duo]["mmr"]))
	instance.squadTier= get_ER_Tier(int(user_stats["userStats"][ER_userStats_Squad]["mmr"]))
	# instance.averageHunts = user_stats["userStats"][ER_userStats_Num]["averageHunts"]
	# instance.averageHunts = user_stats["userStats"][ER_userStats_Num]["averageHunts"]
	# instance.averageHunts = user_stats["userStats"][ER_userStats_Num]["averageHunts"]
	# instance.averageHunts = user_stats["userStats"][ER_userStats_Num]["averageHunts"]
	
	# 모스픽에 대한 정보
	# print(user_stats["userStats"]["nickname"])
	# instance.nickname = user_stats["userStats"]["nickname"]
	# instance.winning_rate =