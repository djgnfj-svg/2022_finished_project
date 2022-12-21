from calendar import c
from email.policy import default
from django.db import models
from django.core.validators import MinLengthValidator
# Create your models here.

class ER_Trolls_Models(models.Model):
	#트롤 신고
	nickname = models.CharField(max_length=30)
	ven_count = models.IntegerField(default=0)
	memo = models.JSONField(default={})
	
	trolls_ven = models.BooleanField(default=False)

	def trolls_count_up(self):
		self.ven_count += 1
		if self.ven_count > 9:
			self.trolls_ven = True

	@property
	def ven(self):   #getter
			return self.trolls_count
	
class ER_Base_Model(models.Model):
	nickname = models.CharField(max_length=30)
	memo = models.CharField(max_length=100)
	remove_password = models.CharField(max_length=4,validators=[MinLengthValidator(4)])
	most_pick = models.JSONField(default='{}')

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