
class Api::BizController < ApplicationController

  def index
    @bizes = Biz.all.includes(:reviews, :reviewed_users)
    render :index
  end

  def show
    @biz = Biz.find_by(id: params[:id])
    render :show
  end

  def sms
    phone_number = '1' + params[:phoneNumber]
    url = "https://celp.herokuapp.com/#/#{params[:id]}"
    body = "Hi, checkout this restaurant: #{url}"
    twilio = TwilioTextMessenger.new(body)
    twilio.call(phone_number)
    render json: {confirmation: 'success'}
  end

  private
  def biz_sms
    params.require(:biz).permit(:phoneNumber)
  end
end
