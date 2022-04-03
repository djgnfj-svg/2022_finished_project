from django.db import models
from django.core.validators import MinLengthValidator
# Create your models here.

class ER_Char_status(models.Model):
	charname = models.CharField(max_length=30)
	#승률
	char_winning_rate = models.FloatField()
	#평균 ada
	char_Kills = models.FloatField()
	char_Hunts = models.FloatField()
	char_Assistants = models.FloatField()

class ER_Base_Model(models.Model):
	nickname = models.CharField(max_length=30)
	memo = models.CharField(max_length=100)
	remove_password = models.CharField(max_length=4,validators=[MinLengthValidator(4)])
	most_pick = models.ForeignKey(ER_Char_status, null=True, on_delete=models.CASCADE)

	#승률
	winning_rate = models.FloatField()
	
	#평균 ada
	averageKills = models.FloatField()
	averageHunts = models.FloatField()
	averageAssistants = models.FloatField()

	#티어
	soloTier = models.CharField(max_length=10)
	duoTier = models.CharField(max_length=10)
	squadTier = models.CharField(max_length=10)

	updated_at = models.DateTimeField(auto_now=True)
	created_at = models.DateTimeField(auto_now_add=True)