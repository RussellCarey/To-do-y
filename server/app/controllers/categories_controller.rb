class CategoriesController < ApplicationController
  before_action :authenticate_user!, only: %i[ users show destroy update create ]
  before_action :set_category, only: %i[ show update destroy ]
  

  # GET /categories
  def index
    @categories = Category.all
    render json: @categories
  end

  # GET /categories/1
  def show
    render json: @category
  end

  # GET /users_categories
  def users
    @user_categories = Category.where(user_id: current_user.id)
    render json: @user_categories
  end

  # POST /categories
    # Needs: name, color, user
  def create
    @category = Category.new(category_params)
    @category.user = current_user

    if @category.save
      render json: @category, status: :created, location: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /categories/1
  def update
    if @category.update(category_params)
      render json: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /categories/1
  def destroy
    @category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_category
      @category = Category.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def category_params
      params.require(:category).permit(:name, :color)
    end
end
