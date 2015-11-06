class UsersController < ApplicationController
  def index
  end

  def new
    @user=User.new
  end

  def create
    @user = User.new user_params
    if @user.save
      flash[:success] = "Welcome to my nightmare"
      redirect_to puzzles_path
    else
      render new_user_path
    end
  end

  def show
    @user = User.find(params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:user_name, :email, :password_digest, :password_digest_confirmation)
  end


end