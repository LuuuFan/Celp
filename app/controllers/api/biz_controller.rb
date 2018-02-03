class Api::BizController < ApplicationController

  def index
    @bizes = Biz.all
    @bizes.each {|biz| biz.set_img}
    render :index
  end

  def show
    @biz = Biz.find_by(id: params[:id])
    @biz.set_img
    render :show
  end

end
