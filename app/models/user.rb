class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         
  validates :account_id,
    presence: true,
    uniqueness: { case_sensitive: false }

  validates :password, length: { minimum: 8 }
end
