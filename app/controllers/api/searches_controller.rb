class Api::SearchesController < ApplicationController

  def index
    if params[:key]
      if Tag.all.pluck(:tag_name).include?(params[:key].capitalize)
        if params[:loc]
          @bizes = Biz.joins(:tags).where(tags: {tag_name: params[:key].capitalize}, city: params[:loc].split(' ').map{|el| el.capitalize}.join(' ')).includes(:reviews, :reviewed_users)
        else
          @bizes = Biz.joins(:tags).where(tags: {tag_name: params[:key].capitalize}).includes(:reviews, :reviewed_users)
        end
      else
        name = "%#{params[:key].split(//).join('%')}%"
        @bizes = Biz.where('UPPER(name) LIKE UPPER(?)', name)
      end
    elsif params[:loc]
      @bizes = Biz.where(city: params[:loc].split(' ').map{|el| el.capitalize}.join(' ')).includes(:reviews, :reviewed_users)
    elsif params[:cat]
      @bizes = Biz.joins(:categories).where(categories: {category: params[:cat].capitalize}).includes(:reviews, :reviewed_users)
    else
      @bizes = {}
    end
    render 'api/biz/index', status: 200
  end

end
