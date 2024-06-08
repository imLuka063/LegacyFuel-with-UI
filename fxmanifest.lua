fx_version 'cerulean'
game 'gta5'

ui_page 'html/index.html'

files {
    'html/**/'
}

client_scripts {
    'config.lua',
    'source/fuel_client.lua'
}

server_scripts {
    'config.lua',
    'source/fuel_server.lua'
}

exports {
    'GetFuel',
    'SetFuel'
}
