# Generated by Django 4.0.3 on 2022-04-12 13:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MarketplaceITSV', '0013_remove_post_id_post_post_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='post_id',
        ),
        migrations.AddField(
            model_name='post',
            name='id',
            field=models.BigAutoField(auto_created=True, default=1, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
    ]
