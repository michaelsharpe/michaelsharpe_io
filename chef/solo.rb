#!/usr/bin/env ruby

root = File.absolute_path(File.dirname(__FILE__))

file_cache_path root
cookbook_path ["#{root}/cookbooks","#{root}/site-cookbooks"]
role_path root + '/roles'