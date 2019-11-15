# == Schema Information
#
# Table name: shortened_urls
#
#  id         :bigint           not null, primary key
#  long_url   :string           not null
#  short_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_shortened_urls_on_user_id  (user_id) UNIQUE
#

class ShortenedUrl < ApplicationRecord
  validates :long_url, presence:true
  validates :user_id, presence:true, uniqueness: true

  def self.random_code
    loop do 
      temp = SecureRandom.urlsafe_base64
      return temp unless ShortenedUrl.exists?(short_url:temp)
    end
  end

  def self.addtotable(userId,longUrl)
    ShortenedUrl.create!(user_id: userId, long_url: longUrl, short_url: ShortenedUrl.random_code)

    
  end


end
