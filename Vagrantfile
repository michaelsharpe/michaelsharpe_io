# -*- mode: ruby -*-
# vi: set ft=ruby :

require 'json'

def getToken()
    JSON.parse(File.read('do-token.json'))['token']
end


# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|

  config.vm.network "forwarded_port", guest: 80, host: 8080

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

  config.vm.define "local" do |local|
    local.vm.box = "precise64"
    local.vm.box_url = "http://files.vagrantup.com/precise64.box"

  end

  config.vm.define "production" do |prod|
    config.vm.provider :digital_ocean do |provider, override|
      override.ssh.private_key_path = '~/.ssh/id_rsa'
      override.vm.box = 'digital_ocean'
      override.vm.box_url = "https://github.com/smdahlen/vagrant-digitalocean/raw/master/box/digital_ocean.box"

      provider.ssh_key_name = "ubuntu"
      provider.token = getToken()
      provider.image = 'ubuntu-14-04-x64'
      provider.region = 'nyc2'
      provider.size = '512mb'
    end
  end

  config.berkshelf.enabled = true
  config.berkshelf.berksfile_path ="./Berksfile"
  config.omnibus.chef_version = :latest

  config.vm.provision :chef_solo do |chef|
    # The following is not necessary because we use berkshelf

    chef.cookbooks_path = ["chef/site-cookbooks"]

    chef.add_recipe "MichaelSharpe::default"

    chef.json = {
      "authorization" => {
          'sudo' => {
            'users' => ["ubuntu"],
            'passwordless' => true
          }
      }
    }

  end

end
