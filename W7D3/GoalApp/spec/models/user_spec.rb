require 'rails_helper'

RSpec.describe User, type: :model do

  subject(:user) do
    User.create!(
      email: "sami@gmail.com",
      password: "super_secret_password"
    )
  end

  describe "validations" do
    before{user.save!}
    it { should validate_presence_of(:email) }
    it { should validate_presence_of(:session_token) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_uniqueness_of(:session_token) }
    it { should validate_uniqueness_of(:email) }
    it { should validate_length_of(:password) }
    
  end

  describe "find_by_credentials" do 
    before{user.save!}
    it 'should find by user credentials' do
      expect(User.find_by_credentials('sami@gmail.com','super_secret_password')).to eq(user)
    end
    it 'should return nil if given bad credentials' do
      expect(User.find_by_credentials('sami@gmail.com','samisami')).to eq(nil)
    end
  end
end
