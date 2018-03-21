class TwilioTextMessenger
  attr_reader :message

  def initialize(message)
    @message = message
  end

  def call(phone_number)
    account_sid = Rails.application.secrets.twilio_account_sid
    auth_token = Rails.application.secrets.twilio_auth_token
    client = Twilio::REST::Client.new account_sid, auth_token
    client.messages.create({
      from: Rails.application.secrets.twilio_phone_number,
      to: phone_number,
      body: message
    })
  end
end
