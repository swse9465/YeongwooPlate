from jmt.models import Jmtcontent, Jmtcontentlist  # models.js에 만들어놓은 class import
from rest_framework import serializers

class JmtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jmtcontent
        fields = '__all__'

class JmtContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jmtcontentlist
        fields = '__all__'