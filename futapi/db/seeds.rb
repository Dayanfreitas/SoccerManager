# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# 

Enterprise.find_or_create_by(name: "JM")
Enterprise.find_or_create_by(name: "Pinga")
Enterprise.find_or_create_by(name: "Arena da Praia")

Position.find_or_create_by(initials: 'GOL', name: 'Goleiro') 
Position.find_or_create_by(initials: 'ZAG', name: 'Zagueiro') 
Position.find_or_create_by(initials: 'LD', name: 'Lateral Direito') 
Position.find_or_create_by(initials: 'LE', name: 'Lateral Esquerdo')
Position.find_or_create_by(initials: 'VOL', name: 'Volante') 
Position.find_or_create_by(initials: 'MD', name: 'Meia Direita') 
Position.find_or_create_by(initials: 'ME', name: 'Meia Esquerda') 
Position.find_or_create_by(initials: 'SA', name: 'Segundo Atacante') 
Position.find_or_create_by(initials: 'PD', name: 'Ponta Direita') 
Position.find_or_create_by(initials: 'PE', name: 'Ponta Esquerda') 
Position.find_or_create_by(initials: 'ATA', name: 'Atacante') 


AccessType.find_or_create_by(name: 'Sudo', initials: 'SU')
AccessType.find_or_create_by(name: 'Admin', initials: 'ADM')
AccessType.find_or_create_by(name: 'Player', initials: 'PLY')

# User.find_or_create_by(name: 'Dayan', email: 'dayan@gmail.com', password: '123456', access_type: 1)
# user1 = User.first
# Player.find_or_create_by(name: 'Dayan F.', number: '10', stars: '1', user: user1, position: Position.first)

