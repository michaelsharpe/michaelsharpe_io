nodejs_npm "grunt-cli" do
    options ['-g']
end

nodejs_npm "bower" do
    options ['-g']
end

nodejs_npm "pm2" do
    options ['-g']
end

execute "dependecies" do
  command "cd /Vagrant && npm install && bower install"
  command "echo 'Dependencies installed"
end

execute "build" do
  command "cd /Vagrant && grunt"
  command "echo 'Appliucation built"
end

execute "run" do
  command "cd /Vagrant && pm2 app.js"
  command "echo 'Server is now running"
end