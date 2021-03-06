class User < ApplicationRecord
    validates :username,:session_token,:password_digest, presence:true
    validates :username,:session_token, uniqueness:true
    validates :password, length:{minimum: 6,allow_nil: true}

    before validation :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(username,password)
        user = User.find_by(username: username)
        return nil if user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    has_many :subs
    has_many :posts
    has_many :comments
end
