class Api::BizController < ApplicationController

  def index
    @bizes = Biz.all
    render :index
  end

  def show
    @biz = Biz.find_by(id: params[:id])
    render :show
  end

end
