# Generated by Django 3.0.2 on 2020-11-15 03:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='All_Users',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_user', models.CharField(max_length=200)),
                ('email_user', models.EmailField(max_length=254)),
            ],
        ),
    ]
