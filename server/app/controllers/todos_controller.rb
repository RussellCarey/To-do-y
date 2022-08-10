class TodosController < ApplicationController
  before_action :authenticate_user!, only: %i[ users_todos create update destroy ]
  before_action :set_todo, only: %i[ show update destroy ]
  before_action :check_user_is_admin, only: %i[ index ]

  # GET /todos
  def indexs
    @todos = Todo.all
    render json: @todos
  end

  def users_todos
    @users_todos = current_user.todos
    render json: @users_todos
  end

  # GET /todos/1
  def show
    render json: @todo
  end

  # POST /todos
  # Needs: title, content, deadline, category id
  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render json: @todo, status: :created, location: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todos/1
  def update
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todos/1
  def destroy
    if @todo.destroy
      render json: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def todo_params
      params.require(:todo).permit(:title, :content, :deadline, :category_id)
    end

    def check_is_admin
      if(!current_user.isAdmin)
        render json: {message: "You cannot access this resource"}, status: :unprocessable_entity
      end
    end
end
