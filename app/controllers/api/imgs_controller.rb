class Api::ImgsController < ApplicationController

  def index

  end

  def show
    @img = Img.find_by(id: params[:id])
  end

  def create
    @img = Img.new(img_params)
    @img.biz_id = params[:bizId]
    @img.user_id = current.user_id
    if @img.save

    else
      render json: @img.errors.full_messages, status: 422
    end
  end

  private
  def img_params
    params.require(:img).permit(:url)
  end

end
