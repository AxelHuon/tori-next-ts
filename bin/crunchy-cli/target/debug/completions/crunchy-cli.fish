complete -c crunchy-cli -n "__fish_use_subcommand" -l lang -d 'Overwrite the language in which results are returned. Default is your system language' -r
complete -c crunchy-cli -n "__fish_use_subcommand" -l credentials -d 'Login with credentials (username or email and password). Must be provided as user:password' -r
complete -c crunchy-cli -n "__fish_use_subcommand" -l etp-rt -d 'Login with the etp-rt cookie' -r
complete -c crunchy-cli -n "__fish_use_subcommand" -l proxy -d 'Use a proxy to route all traffic through' -r
complete -c crunchy-cli -n "__fish_use_subcommand" -l user-agent -d 'Use custom user agent' -r
complete -c crunchy-cli -n "__fish_use_subcommand" -s v -l verbose -d 'Verbose output'
complete -c crunchy-cli -n "__fish_use_subcommand" -s q -l quiet -d 'Quiet output. Does not print anything unless it\'s a error'
complete -c crunchy-cli -n "__fish_use_subcommand" -l experimental-fixes -d 'Enable experimental fixes which may resolve some unexpected errors'
complete -c crunchy-cli -n "__fish_use_subcommand" -l anonymous -d 'Login anonymously / without an account'
complete -c crunchy-cli -n "__fish_use_subcommand" -s h -l help -d 'Print help (see more with \'--help\')'
complete -c crunchy-cli -n "__fish_use_subcommand" -s V -l version -d 'Print version'
complete -c crunchy-cli -n "__fish_use_subcommand" -f -a "archive" -d 'Archive a video'
complete -c crunchy-cli -n "__fish_use_subcommand" -f -a "download" -d 'Download a video'
complete -c crunchy-cli -n "__fish_use_subcommand" -f -a "login" -d 'Save your login credentials persistent on disk'
complete -c crunchy-cli -n "__fish_use_subcommand" -f -a "search" -d 'Search in videos'
complete -c crunchy-cli -n "__fish_use_subcommand" -f -a "help" -d 'Print this message or the help of the given subcommand(s)'
complete -c crunchy-cli -n "__fish_seen_subcommand_from archive" -s a -l audio -d 'Audio languages. Can be used multiple times. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from archive" -s s -l subtitle -d 'Subtitle languages. Can be used multiple times. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from archive" -s o -l output -d 'Name of the output file' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from archive" -l output-specials -d 'Name of the output file if the episode is a special' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from archive" -s r -l resolution -d 'Video resolution' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from archive" -s m -l merge -d 'Sets the behavior of the stream merging. Valid behaviors are \'auto\', \'audio\' and \'video\'' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from archive" -l ffmpeg-preset -d 'Presets for converting the video to a specific coding format. Available presets: 
  h264 (h264 encoded with default video quality/compression)
  h264-nvidia (h264 encoded with nvidia hardware acceleration)
  h264-apple (h264 encoded with apple hardware acceleration)
  h264-lossless (h264 encoded with lossless video quality/compression)
  h264-normal (h264 encoded with normal video quality/compression)
  h264-low (h264 encoded with low video quality/compression)
  h264-nvidia-lossless (h264 encoded with nvidia hardware acceleration and lossless video quality/compression)
  h264-nvidia-normal (h264 encoded with nvidia hardware acceleration and normal video quality/compression)
  h264-nvidia-low (h264 encoded with nvidia hardware acceleration and low video quality/compression)
  h264-apple-lossless (h264 encoded with apple hardware acceleration and lossless video quality/compression)
  h264-apple-normal (h264 encoded with apple hardware acceleration and normal video quality/compression)
  h264-apple-low (h264 encoded with apple hardware acceleration and low video quality/compression)
  h265 (h265 encoded with default video quality/compression)
  h265-nvidia (h265 encoded with nvidia hardware acceleration)
  h265-apple (h265 encoded with apple hardware acceleration)
  h265-lossless (h265 encoded with lossless video quality/compression)
  h265-normal (h265 encoded with normal video quality/compression)
  h265-low (h265 encoded with low video quality/compression)
  h265-nvidia-lossless (h265 encoded with nvidia hardware acceleration and lossless video quality/compression)
  h265-nvidia-normal (h265 encoded with nvidia hardware acceleration and normal video quality/compression)
  h265-nvidia-low (h265 encoded with nvidia hardware acceleration and low video quality/compression)
  h265-apple-lossless (h265 encoded with apple hardware acceleration and lossless video quality/compression)
  h265-apple-normal (h265 encoded with apple hardware acceleration and normal video quality/compression)
  h265-apple-low (h265 encoded with apple hardware acceleration and low video quality/compression)
  av1 (av1 encoded with default video quality/compression)
  av1-lossless (av1 encoded with lossless video quality/compression)
  av1-normal (av1 encoded with normal video quality/compression)
  av1-low (av1 encoded with low video quality/compression)' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from archive" -l default-subtitle -d 'Set which subtitle language should be set as default / auto shown when starting a video' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from archive" -s t -l threads -d 'The number of threads used to download' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from archive" -l skip-existing -d 'Skip files which are already existing'
complete -c crunchy-cli -n "__fish_seen_subcommand_from archive" -l skip-specials -d 'Skip special episodes'
complete -c crunchy-cli -n "__fish_seen_subcommand_from archive" -s y -l yes -d 'Skip any interactive input'
complete -c crunchy-cli -n "__fish_seen_subcommand_from archive" -s h -l help -d 'Print help (see more with \'--help\')'
complete -c crunchy-cli -n "__fish_seen_subcommand_from download" -s a -l audio -d 'Audio language. Can only be used if the provided url(s) point to a series. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from download" -s s -l subtitle -d 'Subtitle language. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from download" -s o -l output -d 'Name of the output file' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from download" -l output-specials -d 'Name of the output file if the episode is a special' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from download" -s r -l resolution -d 'Video resolution' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from download" -l ffmpeg-preset -d 'Presets for converting the video to a specific coding format. Available presets: 
  h264 (h264 encoded with default video quality/compression)
  h264-nvidia (h264 encoded with nvidia hardware acceleration)
  h264-apple (h264 encoded with apple hardware acceleration)
  h264-lossless (h264 encoded with lossless video quality/compression)
  h264-normal (h264 encoded with normal video quality/compression)
  h264-low (h264 encoded with low video quality/compression)
  h264-nvidia-lossless (h264 encoded with nvidia hardware acceleration and lossless video quality/compression)
  h264-nvidia-normal (h264 encoded with nvidia hardware acceleration and normal video quality/compression)
  h264-nvidia-low (h264 encoded with nvidia hardware acceleration and low video quality/compression)
  h264-apple-lossless (h264 encoded with apple hardware acceleration and lossless video quality/compression)
  h264-apple-normal (h264 encoded with apple hardware acceleration and normal video quality/compression)
  h264-apple-low (h264 encoded with apple hardware acceleration and low video quality/compression)
  h265 (h265 encoded with default video quality/compression)
  h265-nvidia (h265 encoded with nvidia hardware acceleration)
  h265-apple (h265 encoded with apple hardware acceleration)
  h265-lossless (h265 encoded with lossless video quality/compression)
  h265-normal (h265 encoded with normal video quality/compression)
  h265-low (h265 encoded with low video quality/compression)
  h265-nvidia-lossless (h265 encoded with nvidia hardware acceleration and lossless video quality/compression)
  h265-nvidia-normal (h265 encoded with nvidia hardware acceleration and normal video quality/compression)
  h265-nvidia-low (h265 encoded with nvidia hardware acceleration and low video quality/compression)
  h265-apple-lossless (h265 encoded with apple hardware acceleration and lossless video quality/compression)
  h265-apple-normal (h265 encoded with apple hardware acceleration and normal video quality/compression)
  h265-apple-low (h265 encoded with apple hardware acceleration and low video quality/compression)
  av1 (av1 encoded with default video quality/compression)
  av1-lossless (av1 encoded with lossless video quality/compression)
  av1-normal (av1 encoded with normal video quality/compression)
  av1-low (av1 encoded with low video quality/compression)' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from download" -s t -l threads -d 'The number of threads used to download' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from download" -l skip-existing -d 'Skip files which are already existing'
complete -c crunchy-cli -n "__fish_seen_subcommand_from download" -l skip-specials -d 'Skip special episodes'
complete -c crunchy-cli -n "__fish_seen_subcommand_from download" -s y -l yes -d 'Skip any interactive input'
complete -c crunchy-cli -n "__fish_seen_subcommand_from download" -l force-hardsub -d 'Force subtitles to be always burnt-in'
complete -c crunchy-cli -n "__fish_seen_subcommand_from download" -s h -l help -d 'Print help (see more with \'--help\')'
complete -c crunchy-cli -n "__fish_seen_subcommand_from login" -l credentials -d 'Login with credentials (username or email and password). Must be provided as user:password' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from login" -l etp-rt -d 'Login with the etp-rt cookie' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from login" -l anonymous -d 'Login anonymously / without an account'
complete -c crunchy-cli -n "__fish_seen_subcommand_from login" -l remove -d 'Remove your stored credentials (instead of saving them)'
complete -c crunchy-cli -n "__fish_seen_subcommand_from login" -s h -l help -d 'Print help (see more with \'--help\')'
complete -c crunchy-cli -n "__fish_seen_subcommand_from search" -l audio -d 'Audio languages to include. Available languages are: ar-ME, ar-SA, de-DE, en-IN, en-US, es-419, es-ES, es-LA, fr-FR, hi-IN, it-IT, ja-JP, pt-BR, pt-PT, ru-RU, ta-IN, zh-CN' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from search" -l search-top-results-limit -d 'Limit of search top search results' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from search" -l search-series-limit -d 'Limit of search series results' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from search" -l search-movie-listing-limit -d 'Limit of search movie listing results' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from search" -l search-episode-limit -d 'Limit of search episode results' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from search" -l search-music-limit -d 'Limit of search music results' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from search" -s o -l output -d 'Format of the output text.' -r
complete -c crunchy-cli -n "__fish_seen_subcommand_from search" -s h -l help -d 'Print help (see more with \'--help\')'
complete -c crunchy-cli -n "__fish_seen_subcommand_from help; and not __fish_seen_subcommand_from archive; and not __fish_seen_subcommand_from download; and not __fish_seen_subcommand_from login; and not __fish_seen_subcommand_from search; and not __fish_seen_subcommand_from help" -f -a "archive" -d 'Archive a video'
complete -c crunchy-cli -n "__fish_seen_subcommand_from help; and not __fish_seen_subcommand_from archive; and not __fish_seen_subcommand_from download; and not __fish_seen_subcommand_from login; and not __fish_seen_subcommand_from search; and not __fish_seen_subcommand_from help" -f -a "download" -d 'Download a video'
complete -c crunchy-cli -n "__fish_seen_subcommand_from help; and not __fish_seen_subcommand_from archive; and not __fish_seen_subcommand_from download; and not __fish_seen_subcommand_from login; and not __fish_seen_subcommand_from search; and not __fish_seen_subcommand_from help" -f -a "login" -d 'Save your login credentials persistent on disk'
complete -c crunchy-cli -n "__fish_seen_subcommand_from help; and not __fish_seen_subcommand_from archive; and not __fish_seen_subcommand_from download; and not __fish_seen_subcommand_from login; and not __fish_seen_subcommand_from search; and not __fish_seen_subcommand_from help" -f -a "search" -d 'Search in videos'
complete -c crunchy-cli -n "__fish_seen_subcommand_from help; and not __fish_seen_subcommand_from archive; and not __fish_seen_subcommand_from download; and not __fish_seen_subcommand_from login; and not __fish_seen_subcommand_from search; and not __fish_seen_subcommand_from help" -f -a "help" -d 'Print this message or the help of the given subcommand(s)'
