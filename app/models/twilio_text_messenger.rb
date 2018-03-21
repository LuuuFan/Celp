class TwilioTextMessenger
  attr_reader :message

  def initialize(message)
    @message = message
  end

  def call(phone_number)
    client = Twilio::REST::Client.new
    client.messages.create({
      from: Rails.application.secrets.twilio_phone_number,
      to: phone_number,
      body: message
    })
  end
end
