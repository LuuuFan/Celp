class Api::ImgsController < ApplicationController

  def index

  end

  def show
    @img = Img.find_by(id: params[:id])
  end

  def create
    @img = Img.new(img_params)
    @img.biz_id = params[:biz_id]
    @img.user_id = current_user.id
    if @img.save
      render :show
    else
      render json: @img.errors.full_messages, status: 422
    end
  end

  def destroy
    @img = Img.find_by(id: params[:id])
    @img.destroy
    render :show
  end

  private
  def img_params
    params.require(:img).permit(:url, :description)
  end

end
