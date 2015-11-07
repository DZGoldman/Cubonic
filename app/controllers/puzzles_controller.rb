class PuzzlesController < ApplicationController
  def index
    @puzzles= Puzzle.all
  end

  def show
      @puzzle= Puzzle.find(params[:id])
  end

  def edit
    @puzzle=Puzzle.find(params[:id])
  end

  def update

  end
  
  def new
    @puzzle=Puzzle.new
  end

  def create
    @puzzle= Puzzle.new puzzle_params
    @puzzle.user_id = current_user.id
    #@puzzle.clicks_created= 3
    @puzzle.save
    redirect_to puzzle_path(@puzzle)
  end

  def win

  end

  def destroy
    @puzzle=Puzzle.find(params[:id])
    @puzzle.delete
    flash.now[:notice] = "puzzle deleted"

    redirect_to puzzles_path
  end

  private
  def puzzle_params
    params.require(:puzzle).permit(:notes, :pattern, :clicks_created)
  end
end
