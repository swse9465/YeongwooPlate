from rest_framework import serializers
from review.models import Review, Review_photo

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class CreateReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["content", "score", "store", "user"]

class UpdateReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["content", "score", "like"]

class LikeReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ["like"]

class ReviewPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review_photo
        fields = '__all__'