# Generated by Django 5.1 on 2024-08-25 22:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('peliculas', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='peliculas',
            name='imagen',
            field=models.ImageField(blank=True, null=True, upload_to='images/', verbose_name='Imagen'),
        ),
    ]
