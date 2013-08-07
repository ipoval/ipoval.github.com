#!/usr/bin/env ruby

# encoding: utf-8

if __FILE__ == $0

require 'pathname'
require 'logger'
require 'aws'

PHOTOS_S3_BUCKET_NAME = 'photos.ipoval.com'

AWS.config(logger: Logger.new($stdout), log_level: :debug)
s3 = AWS::S3.new(access_key_id: 'AKIAI42GB3TAHPEU2VWA', secret_access_key: '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')

bucket = s3.buckets[PHOTOS_S3_BUCKET_NAME]

git_log = `git log -1 --pretty="format:" --name-only .`
uploading_files = git_log.split($/).compact.reject(&:empty?)

uploading_files.each do |f|
  path = f.sub("#{PHOTOS_S3_BUCKET_NAME}/", '')
  bucket.objects[path].write Pathname.new(path) if Pathname.new(path).exist?
end

end
