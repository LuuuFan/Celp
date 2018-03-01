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
    debugger
    
  end

  private
  def biz_sms
    params.require(:biz).permit(:phoneNumber)
  end
end
