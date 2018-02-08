class User < ApplicationRecord
  attr_reader :password
  validates :username, :password_digest, :session_token, :email, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: {in: 6..20, allow_nil:true}
  before_validation :ensure_session_token

  has_many :imgs
  has_many :imged_biz,
    through: :imgs,
    source: :biz
  has_many :reviews
  has_many :reviewed_biz,
    through: :reviews,
    source: :biz
  has_many :bookmarks
  has_many :bookmark_biz,
    through: :bookmarks,
    source: :biz


  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, format: { with: VALID_EMAIL_REGEX, message: "Invalid, example: 'celp@celp.com' "}


  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
