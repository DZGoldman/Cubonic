class SessionsController < ApplicationController
  def index

  end

  def new
  end

  def create
    user = User.find_by(user_name: params[:session][:user_name])
    if user && user.authenticate(params[:session][:password])
      log_in user
      flash[:notice] = "Successfully logged in. Olay Olay."
      redirect_to puzzles_path

    else
      flash.now[:danger] = "Invalid email/password combination"
      render 'new'
    end
  end

  def destroy
    log_out
        flash[:notice] = "Logged out. Olay Olay."
    redirect_to root_path
  end
end
