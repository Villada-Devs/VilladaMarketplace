# Generated by Django 4.0.3 on 2022-03-27 19:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MarketplaceITSV', '0004_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ppp',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('texto', models.TextField()),
            ],
        ),
    ]
