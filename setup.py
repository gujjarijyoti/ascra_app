# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in ascra_app/__init__.py
from ascra_app import __version__ as version

setup(
	name='ascra_app',
	version=version,
	description='Works for Ascratech',
	author='jyoti',
	author_email='jyotisgujjari@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
