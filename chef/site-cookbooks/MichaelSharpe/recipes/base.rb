include_recipe 'apt'
include_recipe 'build-essential'
include_recipe 'git'
include_recipe 'sudo'
include_recipe 'vim'
include_recipe "nodejs::nodejs_from_package"