class User < ApplicationRecord
  acts_as_token_authenticatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  
  devise :database_authenticatable, 
         :registerable,
         :recoverable, 
         :rememberable, 
         :validatable
  
  validates :email, :name, presence: true
      
  belongs_to :access_type
  has_one :player, dependent: :destroy
  has_one :statistic
  has_many :games
  has_one_attached :image

  after_create :create_player

  def super_user?
    self.access_type.name.upcase == "SUDO"
  end

  def admin?
    self.access_type.name.upcase == "ADMIN"
  end

  def player?
    self.access_type.name.upcase == "PLAYER"
  end

  def create_player
    Player.where(name: self.name, number: '00', stars: '0', user_id: self.id, position_id: Position.first.id).first_or_create
  end
  
end
