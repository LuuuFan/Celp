class Api::BizController < ApplicationController

  def index
    @bizes = Biz.all
  end

  def show
    @biz = Biz.find_by(id: params[:id])
  end

end
