class PuzzlesController < ApplicationController
  def index
    @puzzles= Puzzle.all
  end

  def show
      @puzzle= Puzzle.find(params[:id])
  end

  def edit
  end

  def new
    @puzzle=Puzzle.new
  end

  def create

  end
end
