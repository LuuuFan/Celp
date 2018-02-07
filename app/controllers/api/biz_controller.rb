class Api::BizController < ApplicationController

  def index
    if params[:search]
      @bizes = Biz.joins(:tags).where(tags: {tag_name: params[:search]}).includes(:reviews, :reviewed_users)
    else
      @bizes = Biz.all.includes(:reviews, :reviewed_users)
    end
    render :index
  end

  def show
    @biz = Biz.find_by(id: params[:id])
    render :show
  end

end
