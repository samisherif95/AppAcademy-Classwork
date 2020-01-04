class User < ApplicationRecord
    validates :password, length:{minimum: 6, allow_nil: true}
    validates :username,:password_digest, :session_token,presence: true
    validates :username, :session_token, uniqueness:true

    before_validation :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(username,password)
        user = User.find_by(username: username)
        return nil unless user && user.is_password?(password)
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
end
